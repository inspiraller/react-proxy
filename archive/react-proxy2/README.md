# Description
This repo is to show how to emulate redux using javascipt proxies. 
The proxy is an observer on an object. 
When the object changes we trigger a custom event
We listen to the custom event and then reset the useState variable on a per component basis. 

# Steps:
## 1. commands
- git clone thisrepo
- cd react-proxy2
- npm i
- npm run dev
## 2. From browser
- (open) http://localhost:3000
- (click) goto page
- (click) create todo

Expects: a new rendered todo
done!!