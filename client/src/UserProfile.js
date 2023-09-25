import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function UserProfile() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Welcome on TKYC!</MDBCardTitle>
                    <MDBCardText>erd......</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <i class="mx-auto fab fa-instagram fa-2x"></i>
                      <i class="mx-auto fab fa-twitter fa-2x"></i>
                      <i class="mx-auto fab fa-discord fa-2x"></i>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
            <MDBCol md="7" lg="5" xl="4" className="justify-content-center mt-3 mx-auto">
                <MDBCard style={{ borderRadius: '15px' }} className='p-2 text-center'>Your profile:</MDBCard>
            </MDBCol>
<div class="row">
  <div class="col-sm-6 p-2">
    <div class="card ">
      <div class="card-body text-center">
        <h1 class="card-title">Gamer</h1>
        <p class="card-text">A+++</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-2">
    <div class="card">
      <div class="card-body text-center">
        <h1 class="card-title">DeFi</h1>
        <p class="card-text">A+</p>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6 p-2">
    <div class="card">
      <div class="card-body text-center">
        <h1 class="card-title">Launchpad</h1>
        <p class="card-text">B++</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-2">
    <div class="card">
      <div class="card-body text-center">
        <h1 class="card-title">Community</h1>
        <p class="card-text">a++</p>
      </div>
    </div>
  </div>
</div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}