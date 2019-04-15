import Controller from "@ember/controller";
import {alias} from "@ember/object/computed";
import {inject as service} from "@ember/service";
import {computed} from "@ember/object";

export default Controller.extend({
  classService: service("class"),

  className: alias("classService.selectedClass"),

  assignmentsRoute: computed(function () {
    const className = this.get("className");
    let assignmentsRoute = "assignments";
    if (className) {
      assignmentsRoute += `?className=${className}`;
    }
    return assignmentsRoute;
  })
});
