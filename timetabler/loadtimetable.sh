#!/bin/bash
curl https://docs.google.com/spreadsheets/d/e/2PACX-1vQk3gi8UZ_3oMRMdNEIrvUrSD--K6sf0xhaYGBlu99r5K0-ZD-wieFlKC_O4adTwVSR6BKKPtqTZ7nE/pub\?output\=csv --output /Users/Alien/Sites/timetabler/timetable.csv
echo File Downloaded
csv2json /Users/Alien/Sites/timetabler/timetable.csv > /Users/Alien/Sites/timetabler/timetable.json
echo File Converted