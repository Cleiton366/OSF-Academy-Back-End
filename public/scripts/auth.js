$("#signinBtn").click(async function () {
  const result = await signin();
  if (result.user) {
    sessionStorage.setItem("token", result.token);
    window.location.href = "/";
  } else {
    alert(result.error);
  }
});

$("#signupBtn").click(async function () {
  const result = await signup();
  if (result.user) {
    sessionStorage.setItem("token", JSON.stringify(result.token));
    window.location.href = "/";
  } else {
    alert(result.error);
  }
});

$("#signoutLi").click(function () {
  sessionStorage.removeItem("token");
  window.location.href = "/";
});

async function signin() {
  const email = $("#email").val();
  const password = $("#password").val();
  const result = await fetch("/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => {
    return response.json();
  });
  return result;
}

async function signup() {
  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const result = await fetch("/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then((response) => {
    return response.json();
  });
  return result;
}

