import { staticAppTitle } from "@/base/app";
import { CustomHead } from "@/base/components/Head";
import { disableDiskLogs } from "@/base/log";
import { logUnhandledErrorsAndRejections } from "@/base/log-web";
import { getTheme } from "@ente/shared/themes";
import { THEME_COLOR } from "@ente/shared/themes/constants";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";

import "styles/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        disableDiskLogs();
        logUnhandledErrorsAndRejections(true);
        return () => logUnhandledErrorsAndRejections(false);
    }, []);

    return (
        <>
            <CustomHead title={staticAppTitle} />

            <ThemeProvider theme={getTheme(THEME_COLOR.DARK, "photos")}>
                <CssBaseline enableColorScheme />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
