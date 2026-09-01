package com.sms.service;

import org.springframework.stereotype.Service;

import com.sms.dto.LoginDTO;
import com.sms.entity.Admin;
import com.sms.repository.AdminRepository;

@Service
public class AuthService {

    private final AdminRepository adminRepository;

    AuthService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }
  
    public boolean login(LoginDTO loginDTO) {

        Admin admin = adminRepository
                .findByUsername(loginDTO.getUsername())
                .orElse(null);

        if (admin == null) {
            return false;
        }

        return admin.getPassword().equals(loginDTO.getPassword());
    }

}