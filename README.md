# MagnetURLTrackerParamFormatter

# 中文

## 简介

将写在文件中的tracker url列表，格式化成磁力链的"tr"参数。

比如下面的输入:
```
http://open.tracker.ink:6969/announce
http://opentracker.xyz:80/announce
```

会被转换成:
```
&tr=http%3A%2F%2Fopen.tracker.ink%3A6969%2Fannounce%0D&tr=%0D&tr=http%3A%2F%2Fopentracker.xyz%3A80%2Fannounce
```

## 使用方法

Clone之后先install。

```
npm install
```

保存了tracker url的输入文件在./src/tracker.txt中，可以自行修改里面的内容

执行下面的命令来获得结果:

```
npm start
```

输出就在outputParam.txt文件中。

# English

## Intro

Format a list of tracker urls into magnet link's "tr" param.

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
