import * as React from "react";
import * as SecureStore from "expo-secure-store";

type AuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

type AuthAction =
  | { type: "RESTORE_TOKEN"; token: string | null } // Null for if errors fetching token
  | { type: "SIGN_IN"; token: string }
  | { type: "SIGN_OUT" };

// TODO: Change type of data on further implementation
export const AuthFunctionsContext = React.createContext<{
  signIn: (data: any) => Promise<void>;
  signOut: () => Promise<void>;
} | null>(null);

export const SignInContext = React.createContext<boolean>(false);

const authReducer = (
  currentState: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...currentState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...currentState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...currentState,
        isSignout: true,
        userToken: null,
      };
  }
};

export function useAuth() {
  const [state, dispatch] = React.useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  // Define SignIn and SignOut functions using Memo for performance
  const authFunctions = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        const token = "dummy-auth-token";
        await SecureStore.setItemAsync("userToken", token);
        dispatch({ type: "SIGN_IN", token });
      },
      signOut: async () => {
        await SecureStore.deleteItemAsync("userToken");
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const userToken = await SecureStore.getItemAsync("userToken");
        dispatch({ type: "RESTORE_TOKEN", token: userToken });
      } catch (e) {
        dispatch({ type: "RESTORE_TOKEN", token: null });
      }
    };
    bootstrapAsync();
  }, []);

  return { state, authFunctions };
}
