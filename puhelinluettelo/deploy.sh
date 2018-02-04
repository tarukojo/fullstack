#!/bin/sh
npm run build
xcopy build ..\..\puhelinapi\ /S /E
