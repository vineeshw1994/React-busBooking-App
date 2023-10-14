import styled from 'styled-components';

const Container = styled.div`
 backround-color:white;
    padding:1rem;
    border-radius:5px;
    box-shadow:0px 4px 8px rgbs(0,0,0,0.2);
    text-align:center;
    `;
function BusSearch() {

  return (
    <Container>
         <h2>Search for Buses</h2>
    </Container>
  )
}

export default BusSearch