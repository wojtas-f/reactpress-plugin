declare const vlpAjaxUrl: string;

/**
 * NOTE: vlpAjaxUrl is passed prom Wordpress using script localization
 */
const url = typeof vlpAjaxUrl !== "undefined" ? vlpAjaxUrl : "";

const body = new URLSearchParams({
  action: "get_products",
});

const request = async () => {
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
    },
    body,
  });

  if (!res) return false;
  const data = await res.json();
  if (!data.success) return false;
  return data.data;
};

const api = {
  getProducts: async () => {
    const res = await request();
    return res;
  },
};

export default api;
