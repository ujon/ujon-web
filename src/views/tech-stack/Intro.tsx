import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import { Column } from "components/layout";
import { Text } from "components/html";
import { Mixin } from "styles";
import { hslColor } from "utils";

const Container = styled.div`
  ${Mixin.flexCenter}
  padding: 0 24px 0 48px;
  word-break: break-word;
`;

const Intro = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container>
      <Column>
        <Text.H2
          color={hslColor(theme.primary)}
        >{`Tech Stack\n& Experience`}</Text.H2>
        <Text.Body>{t("lorem")}</Text.Body>
      </Column>
    </Container>
  );
};

export default Intro;
