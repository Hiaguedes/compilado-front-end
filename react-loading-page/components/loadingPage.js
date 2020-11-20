import styled, { css }  from 'styled-components';
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: inline-block;
  margin: 0 auto;
`;

const LoadingPage = ({text}) => {

    return (
        <div style={{width: '8rem', height: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <FadeLoader
          css={override}
          size={50}
          color={"#A676FF"}
          loading={true}
        />
            <p>{text}</p>
        </div>
    );
}

export default LoadingPage;
