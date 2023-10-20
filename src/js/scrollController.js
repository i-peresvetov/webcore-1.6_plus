export const scrollController = {
    disablesScroll() {
      document.body.style.cssText = `
        overflow: hidden;
      `
    },
    enabledScroll() {
      document.body.style.cssText = ``
    }
}