export type TInitialState = {
    isLoggedIn: boolean;
    isDarkMode: boolean;
    isOnline:   boolean;
}

type TIsLoggedInAction = {
    type: 'setIsLoggedIn';
    value: boolean;
};

type TIsDarkModeAction = {
    type: 'setIsDarkMode';
    value: boolean;
}
;
type TIsOnlineAction = {
    type: 'setIsOnline';
    value: boolean;
};

export type TActions = TIsLoggedInAction | TIsDarkModeAction | TIsOnlineAction;

