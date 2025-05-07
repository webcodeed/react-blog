import { redirect } from "react-router-dom";
import { account } from "./appwrite";

const authLoader = async () => {
  try {
    const user = await account.get();
    if (user) {
      console.log(user);
      return redirect("/");
    }
  } catch (error) {
    return error.message;
  }
};

export default authLoader;
