import styled from "styled-components";

const Widget = () => {
    return (

        <WidgetWrapper>
            <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="340" data-numposts="40"></div>
        </WidgetWrapper>

    )
}

const WidgetWrapper = styled.div`

`

export default Widget;