// import { Application } from "@hotwired/stimulus";

// const application = Application.start();
import { Application, defaultSchema } from "@hotwired/stimulus";

const customSchema = {
  ...defaultSchema,
  actionAttribute: "data-stimulus-action",
  targetAttribute: "data-stimulus-target",
  controllerAttribute: "data-stimulus-controller",
};
const application = Application.start(document.documentElement, customSchema);

// window.Stimulus = Application.start(document.documentElement, customSchema);
// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };
