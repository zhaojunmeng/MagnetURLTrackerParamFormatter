# MagnetURLTrackerParamFormatter

Format a list of tracker urls into magnet link's 'tr' param.

For example, if the input is:
```
http://open.tracker.ink:6969/announce
http://opentracker.xyz:80/announce
```

The output will be:
```
&tr=http%3A%2F%2Fopen.tracker.ink%3A6969%2Fannounce%0D&tr=%0D&tr=http%3A%2F%2Fopentracker.xyz%3A80%2Fannounce
```

## Usage

First install after clone the repo.

```
npm install
```

The input tracker urls is in the ./src/tracker.txt, you can replace it's content with your own's.

Run the script with:

```
npm start
```

The output result is in the outputParam.txt file.
