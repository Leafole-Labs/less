<?php
foreach (glob('C:\Users\rafae\Downloads\less\test_*.php') as $f) unlink($f);
foreach (glob('C:\Users\rafae\Downloads\less\fix_*.php') as $f) unlink($f);
foreach (glob('C:\Users\rafae\Downloads\less\check_*.php') as $f) unlink($f);
echo "Cleaned up temp files\n";