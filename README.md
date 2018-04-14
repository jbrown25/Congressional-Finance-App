# Congressional Finance App

Web app for viewing campaign finance data for members of the US House of Representatives.  Live version is currently hosted in [an S3 bucket](http://congressional-finance-app.s3-website-us-west-2.amazonaws.com/) with static website hosting enabled.

Made with [Simple React Webpack Babel Starter Kit](https://github.com/ReactJSResources/react-webpack-babel), [React](https://reactjs.org/) and [Redux](https://redux.js.org/).  Uses [Chart.js](https://www.chartjs.org/), [React Transition Group](https://github.com/reactjs/react-transition-group), [Axios](https://www.npmjs.com/package/axios), [normalize.css](https://necolas.github.io/normalize.css/).  Data courtesy of the [Center for Responsive Politics](https://opensecrets.org) and [Propublica](https://www.propublica.org/datastore/apis).

The app makes ajax calls to an [AWS API Gateway endpoint](https://aws.amazon.com/api-gateway/), which triggers [this AWS Lambda function](https://github.com/jbrown25/congressional-finance-serverless) that retrieves the data from the OpenSecrets and Propublica APIs. 

American flag loading animation can be viewed [here](https://codepen.io/jbrown25/full/MVRyvM/).  It is my personal favorite part of this project.