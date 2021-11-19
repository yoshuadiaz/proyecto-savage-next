export const GTM_ID = "GTM-WZZKGK6"

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  })
}
