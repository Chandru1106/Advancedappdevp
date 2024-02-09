package com.example.demo.Config;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.example.demo.entity.UserInfo;
import com.example.demo.repo.UserInfoRepository;



@Component
public class UserInfoUserDetailsService implements UserDetailsService {

    @Autowired
    private UserInfoRepository repository;

    @Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    UserInfo userInfo = repository.findById(username).orElse(null);

    if (userInfo != null) {
        Collection<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(userInfo.getRoles()));
        return new User(userInfo.getName(), userInfo.getPassword(), authorities);
    } else {
        throw new UsernameNotFoundException("Username is not valid!");
    }
}

}