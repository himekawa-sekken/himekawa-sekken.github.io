import { Pjax } from "pjax-api"

export const pjaxinit = (): Pjax => {
  return new Pjax({
    areas: [
      "#main, #breadcrumb, #mainnav, #sidebar, #pre_content",
      "#grid",
      "body"
    ],
    update: {
      css: false,
      head: "meta"
    }
  })
}
