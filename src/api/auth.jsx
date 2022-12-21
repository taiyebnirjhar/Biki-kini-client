export const setAuthToken = (user, role = "user") => {
  const currentUser = {
    email: user.email,
    userId: user.uid,
    role: role,
    verified: "not verified",
  };

  fetch(`${import.meta.env.VITE_API_URL}/user/${user.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => localStorage.setItem("biki-kini-token", data.token));
};
