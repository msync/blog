set datafile separtor ','
set palette model RGB defined ( 0 'red', 1 'blue')
unset colorbox
set output 'xor-data-plot.png'
set terminal pngcairo
plot ('train-xor.csv') using 1:2:3 with points palette pointtype 5
