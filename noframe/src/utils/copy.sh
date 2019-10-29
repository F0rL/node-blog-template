#!/bin/sh
cd /c/Aman/myCode/node-blog-template/noframe/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log

运行于linux，再使用定时crontab -e编辑 * 0 * * * sh {脚本目录}