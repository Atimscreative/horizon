// const DATABASE_ID = import.meta.env.APPWRITE_DATABASE_ID;
// const USERS_COLLECTION_ID = import.meta.env.APPWRITE_USER_COLLECTION_ID;

// async function login(
//   email: string,
//   password: string,
//   setLoading: any,
//   setUser,
// ) {}


type ILogin = {
  data: { email: string; password: string };
  setLoading
};

async function login(data: { email: string; password: string }) {
  const { email, password } = data;
  setLoading(true);
  try {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    navigate("/dashboard");
  } catch (error: unknown) {
    console.log(error, "User Login");
  } finally {
    setLoading(false);
  }
}

export { login };
