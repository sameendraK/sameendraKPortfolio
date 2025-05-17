import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  title = 'sameendraPortfolio';
  email = "sameendrak@gmail.com";
  skills = ['Angular', 'React', 'JS', 'TS', 'HTML', 'CSS', 'Unqork']
  name: string = 'Sameendra Krovvidi'
  role: string = 'Frontend Developer'
  socials: string[] = ['Github', 'Linkedin']
  experiences: string[] = ['Meditab', 'Aiden AI']
  // projects: string[] = ['IEMO', 'Care Catalyst', 'Edward Jones', 'Internal Projects', 'POCs']
  yoe: string = '3.25+ years'
  projectsString: string = 'Projects'
  specializingIn: string = 'of experience specializing in'
  greetingText: string = 'Hi there, I am'
  experiencesString: string = 'Experiences'
  projects = [
    {
      name: 'IEMO',
      details: 'A medical software platform designed for US-based hospices. Contributed extensively using Angular, TypeScript, Angular Material, and JS Reports for dynamic reporting and UI development.'
    },
    {
      name: 'Care Catalyst',
      details: 'Healthcare application built for clinics across the US. Focused on developing responsive, scalable features using Angular, TypeScript, RxJS, NgRx for state management, and PrimeNG for UI components.'
    },
    {
      name: 'Edward Jones',
      details: 'Signature financial planning application. Worked primarily with Unqork to deliver low-code solutions, alongside CSS and JavaScript for styling and logic implementation.'
    },
    {
      name: 'Internal Projects',
      details: 'Led development on several internal tools including inventory management, employee skill tracking, and timesheet automation, aimed at streamlining company operations.'
    },
    {
      name: 'POCs',
      details: 'Delivered proof-of-concept applications for major clients such as SBI, MetLife, and Amerilife, showcasing technical capabilities and potential solutions for diverse business needs.'
    }
    
    // Add more projects as needed
  ];

}
