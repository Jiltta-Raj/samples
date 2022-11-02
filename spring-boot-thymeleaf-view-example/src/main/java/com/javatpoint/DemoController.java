/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.javatpoint;    
import org.springframework.web.bind.annotation.ModelAttribute;    
import org.springframework.web.bind.annotation.RequestMapping;    
import org.springframework.web.bind.annotation.RequestMethod;    
import org.springframework.web.servlet.ModelAndView;    
import org.springframework.stereotype.Controller;    
@Controller    
public class DemoController   
{    
@RequestMapping("/")    
public String index()  
{    
return"index";    
}    
@RequestMapping(value="/save", method=RequestMethod.POST)    
public ModelAndView save(@ModelAttribute User user)  
{    
ModelAndView modelAndView = new ModelAndView();    
modelAndView.setViewName("user-data");        
modelAndView.addObject("user", user);      
return modelAndView;    
}    
}  