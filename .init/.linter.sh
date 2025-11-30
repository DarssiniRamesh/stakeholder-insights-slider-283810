#!/bin/bash
cd /home/kavia/workspace/code-generation/stakeholder-insights-slider-283810/react_slider_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

