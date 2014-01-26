for each jpg file in the folder,
- create a big version, reduce its quality to 95%
- create a version with height 150px (width auto), reduce quality to 95%
label both versions with portrait_NN.jpg where NN = 00, 01, 02, ...

convert *.jpg  +clone -quality 95 -write portrait_big_%02d.jpg +delete  -resize x150 -quality 95 portrait_%02d.jpg

sometimes the width is 150 instead of the height. With those files, do:

convert portrait_07.jpg -resize x150 portrait_07x.jpg

>> better to use Photoshop, since this here doesn't really work!


convert *.jpg  -quality 60 portrait_big_%02d.jpg