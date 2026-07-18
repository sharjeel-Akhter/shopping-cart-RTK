import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ThemeSlice";

export const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    return { theme, toggleTheme:()=>dispatch(toggleTheme())};
 
};