( function( blocks, element, blockEditor, components ) {
    const { registerBlockType } = blocks;
    const { createElement: el, useState, useEffect } = element;
    const { InspectorControls, useBlockProps } = blockEditor;
    const { TextControl, PanelBody, Placeholder, Button, Spinner } = components;

    registerBlockType( 'wpcoder/shortcode', {
        title: 'WP Coder Snippet',
        icon: {
            src: el(
                'svg',
                {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 20,
                    height: 20,
                    viewBox: "0 0 512 512"
                },
                el(
                    'g',
                    {},
                    el('path', {
                        fill: "#2b7fff",
                        fillRule: "evenodd",
                        stroke: "none",
                        d: "M 496 101 C 496 128.614227 473.614227 151 446 151 C 418.385773 151 396 128.614227 396 101 C 396 73.385773 418.385773 51 446 51 C 473.614227 51 496 73.385773 496 101 Z"
                    }),
                    el(
                        'g',
                        {},
                        el('path', {
                            fill: "#212121",
                            stroke: "none",
                            d: "M 245.714279 232.714294 L 74.285713 61.285736 C 60.571426 47.571411 40 47.571411 26.285713 61.285736 C 12.571427 75 12.571427 95.571442 26.285713 109.285706 L 173.714279 256.714294 L 26.285713 404.142853 C 12.571427 417.857147 12.571427 438.428589 26.285713 452.142853 C 33.142857 459 40 462.428558 50.285713 462.428558 C 60.571426 462.428558 67.428574 459 74.285713 452.142853 L 245.714279 280.714294 C 259.428589 267 259.428589 246.428558 245.714279 232.714294 Z"
                        }),
                        el('path', {
                            fill: "#212121",
                            fillRule: "evenodd",
                            stroke: "none",
                            d: "M 256 431 C 256 448.673096 270.326874 463 288 463 L 464 463 C 481.673096 463 496 448.673096 496 431 L 496 429 C 496 411.326904 481.673096 397 464 397 L 288 397 C 270.326874 397 256 411.326904 256 429 Z"
                        })
                    )
                )
            )
        },
        category: 'widgets',
        attributes: {
            id: { type: 'string', default: '' },
            extraAttrs: { type: 'array', default: [] }
        },
        supports: {
            html: false
        },

        edit: ( props ) => {
            const blockProps = useBlockProps();
            const [ localId, setLocalId ] = useState( props.attributes.id || '' );
            const [ preview, setPreview ] = useState( '' );
            const [ loading, setLoading ] = useState( false );
            const [ availableAttrs, setAvailableAttrs ] = useState( [] );

            const loadPreview = () => {
                if ( ! localId ) {
                    setPreview('<em>Please enter Snippet ID</em>');
                    return;
                }

                props.setAttributes( { id: localId } );
                setLoading( true );

                wp.apiFetch({
                    path: '/wpcoder/v1/preview',
                    method: 'POST',
                    data: { id: localId, extraAttrs: props.attributes.extraAttrs }
                }).then((response) => {
                    setPreview( response.html || '<em>No preview</em>' );
                    setLoading( false );

                    if (response.css) {
                        let styleId = 'wpcoder-style-' + localId;
                        if ( ! document.getElementById(styleId) ) {
                            const style = document.createElement('style');
                            style.id = styleId;
                            style.innerHTML = response.css;
                            document.head.appendChild(style);
                        }
                    }

                });
            };

            useEffect( () => {
                if ( ! props.attributes.id ) return;

                setLoading( true );
                wp.apiFetch({
                    path: '/wpcoder/v1/preview',
                    method: 'POST',
                    data: {
                        id: localId,
                        extraAttrs: props.attributes.extraAttrs
                    }
                }).then((response) => {
                    setPreview( response.html || '<em>No preview</em>' );
                    setLoading( false );

                    // CSS
                    if (response.css) {
                        let styleId = 'wpcoder-style-' + localId;
                        if ( ! document.getElementById(styleId) ) {
                            const style = document.createElement('style');
                            style.id = styleId;
                            style.innerHTML = response.css;
                            document.head.appendChild(style);
                        }
                    }

                });

                wp.apiFetch({
                    path: '/wpcoder/v1/attributes',
                    method: 'POST',
                    data: { id: props.attributes.id }
                }).then((attrs) => {
                    setAvailableAttrs(attrs || []);
                    if (attrs.length > 0 && props.attributes.extraAttrs.length === 0) {
                        const init = attrs.map(a => ({ key: a.key, value: '' }));
                        props.setAttributes({ extraAttrs: init });
                    }
                });


            }, [ props.attributes.id ] )

            if ( ! props.attributes.id ) {
                return el( Placeholder,
                    {
                        label: 'WP Coder Snippet',
                        instructions: 'Enter snippet ID and click Load'
                    },
                    el( 'div', {
                        style: {
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'baseline',
                            maxWidth: '400px'
                        }
                    }, [
                        el( TextControl, {
                            label: '',
                            placeholder: 'Snippet ID',
                            value: localId,
                            onChange: ( value ) => setLocalId( value ),
                            style: { flex: '1' }
                        }),
                        el( Button, {
                            isPrimary: true,
                            onClick: loadPreview
                        }, 'Load Preview')
                    ])
                );
            }

            return el( 'div', blockProps, [
                el( InspectorControls, {},
                    el( PanelBody, { title: 'WP Coder Settings' }, [
                        el( TextControl, {
                            label: 'Snippet ID',
                            value: localId,
                            onChange: ( value ) => setLocalId( value )
                        }),
                        el( 'div', { style: { display: 'flex', gap: '10px', marginTop: '10px' } }, [
                            el( Button, {
                                isPrimary: true,
                                onClick: loadPreview
                            }, 'Reload Preview'),
                            props.attributes.id && el( Button, {
                                isSecondary: true,
                                href: `${ wpcoderBlockData.editBaseUrl }&action=update&id=${ props.attributes.id }`,
                                target: '_blank'
                            }, 'Edit Snippet')
                        ]),
                        availableAttrs.length > 0 && el( 'div', { style: { marginTop: '15px' } },
                            el( PanelBody, { title: 'Shortcode Attributes', initialOpen: true },
                                availableAttrs.map( (attr, i) =>
                                    el( TextControl, {
                                        label: attr.key,
                                        value: (props.attributes.extraAttrs.find(a => a.key === attr.key)?.value) || '',
                                        onChange: ( val ) => {
                                            const newAttrs = props.attributes.extraAttrs.map(a =>
                                                a.key === attr.key ? { ...a, value: val } : a
                                            );
                                            props.setAttributes({ extraAttrs: newAttrs });
                                        }
                                    })
                                )
                            )
                        )
                    ])
                ),
                loading
                    ? el( Spinner, {} )
                    : el( 'div', {
                        className: 'wpcoder-preview',
                        dangerouslySetInnerHTML: { __html: preview }
                    })
            ] );
        },

        save: () => null
    } );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components );