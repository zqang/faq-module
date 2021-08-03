package com.alvin.intern.project.model;

import java.util.Date;

public class AuthenticationResponse {

    private final String jwt;
    private final Date expirationDate;
    private final String userId;

    public AuthenticationResponse(String userId,String jwt, Date expirationDate) {
        this.userId = userId;
        this.jwt = jwt;
        this.expirationDate = expirationDate;
    }

    public String getUserId() {return userId;}
    public String getJwt() {
        return jwt;
    }
    public Date getExpirationDate() {return expirationDate;}
}
