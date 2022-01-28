import { Box, Text } from "@skynexui/components";
import { useRouter } from "next/router";
import appConfig from "../config.json";

export default function Custom404() {
  const { asPath } = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://virtualbackgrounds.site/wp-content/uploads/2020/12/bright-gaming-room-setup.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Text
          variant="heading1"
          styleSheet={{
            borderRadius: "5px",
            padding: "6px",
            marginBottom: "12px",
            color: appConfig.theme.colors.neutrals["000"],
          }}
        >
          404 - Página '{asPath}' não encontrada!
        </Text>
      </Box>
    </>
  );
}
