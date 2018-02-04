#!/bin/sh
npm run build
xcopy build ..\..\puhelinapi\build /S /E
