import { Controller } from "@hotwired/stimulus";
// toggles given class of an element with given id
// to toggle 1 element provide name of the class to toggle data-toggled-class="class" and id of an element to toggle data-toggle-id="id"
// to toggle more elements  provide arrays of classes and elements data-toggled-class='["class-one", "class-two"]',  and data-toggle-id='["id-one", "id-two"]'
export default class extends Controller {
  static targets = ["trigger"];
  // static values = { toggledClasses: string };
  toggle() {
    console.log(this.element);
    // console.log(this.toggledElement);
    // console.log(this.toggledElements);
    if (typeof this.toggledClass === "string")
      this.toggledElement.classList.toggle(this.toggledClass);
    if (typeof this.toggledClass !== "string") {
      this.toggledElements.forEach((e, i) => {
        e.classList.toggle(this.toggledClass[i]);
      });
    }
  }

  get dataset() {
    return this.triggerTarget.dataset;
  }

  get toggledClass() {
    try {
      return JSON.parse(this.dataset.toggledClass);
    } catch {
      return this.dataset.toggledClass;
    }
  }

  get toggleId() {
    try {
      return JSON.parse(this.dataset.toggleId);
    } catch {
      return this.dataset.toggleId;
    }
  }

  get toggledElement() {
    if (typeof this.toggleId === "string")
      return document.getElementById(this.toggleId);
  }

  get toggledElements() {
    if (typeof this.toggleId !== "string") {
      return this.toggleId.map((id) => document.getElementById(id));
    }
  }
}
