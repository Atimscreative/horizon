const DATABASE_ID = import.meta.env.APPWRITE_DATABASE_ID;
const USERS_COLLECTION_ID = import.meta.env.APPWRITE_USER_COLLECTION_ID;

async function login(
  email: string,
  password: string,
  setLoading: any,
  setUser,
) {}

async function logout() {
  await account.deleteSession("current");
  setUser(null);
  window.location.replace("/login");
}
