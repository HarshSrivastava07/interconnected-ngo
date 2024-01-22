import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  // description: string;
  // imageUrl: string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})


export class TeamsComponent implements OnInit {

  teamMembers: TeamMember[] = [
    {
      name: 'Prerna Gupta',
      role: 'Executive Director'
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/john-doe.jpg'
    },
    {
      name: 'Abhay Jaiswal',
      role: 'Operations Manager , BOD',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      name: 'Mohit Saraff',
      role: 'Program Manager, BOD',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      name: 'Bipin Patel',
      role: 'Ploicy Analyst , BOD',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      name: 'Gourav Raj',
      role: 'Social Media Manager , BOD',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      name: 'Rishi Daripa',
      role: ' Advertising Specialist, BOD',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      name: 'Tushar Agarwal',
      role: 'Finance Associate',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      name: 'Jasmine Birua',
      role: 'Content Manager',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      name: 'Tanish Mohanta',
      role: 'Solutions Engineer',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      name: 'Aditi Jha',
      role: 'Web Developer',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus.',
      // imageUrl: 'https://example.com/jane-smith.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

