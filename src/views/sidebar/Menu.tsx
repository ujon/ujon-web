import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import { TextButton2 } from "components/button";
import { Column } from "components/layout";
import { homeRouteItmes } from "routes";
import { Mixin } from "styles";
import { hslColor } from "utils";

const GAP = "30px";

const Container = styled.div`
  ${Mixin.flexCenter}
  flex:1;
`;

const Menu = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const buildItem = homeRouteItmes.map((value, index) => {
    return (
      <TextButton2
        key={`sidebar_menu_${index}`}
        hoverColor={hslColor(theme.primary)}
        textAlign="left"
      >
        <Link to={`${value.path}`}>{t(`routes.${value.name}`)}</Link>
      </TextButton2>
    );
  });

  return (
    <Container>
      <Column gap={GAP}>{buildItem}</Column>
    </Container>
  );
};

export default Menu;
