Javascript-eval widget for Jupyter.

Security considerations
-----------------------

Don't use this in an environment with untrusted notebooks. This means that this widget probably should not be made available in public Jupyter deployments.

Jupyterlab generally does not encourage sending arbitrary javascript to widgets in order to prevent adversarial notebooks from arbitrarily manipulating the browser.

Use cases
---------

This package can be, in general, be used to instantiate widgets where the render code is generated in the notebook itself.

I personally use this widget in order to instantiate arbitrary Elm widgets from notebooks in a trusted environment (an internal deployment of Jupyterlab).

Package Install
---------------

This package is not published and not generally maintained. Thus, installation is from source. If anyone would like to properly maintain the package, feel free to fork it.


**Prerequisites**
- [node](http://nodejs.org/)

```bash
npm install --save jupyter-javascript-eval-widget
```

