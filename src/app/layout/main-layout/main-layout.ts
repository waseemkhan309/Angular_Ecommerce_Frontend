import { Component } from '@angular/core';
import { HeaderSection } from '../../shared/components/header/header-section/header-section';
import { FooterSection } from '../../shared/components/footer/footer-section/footer-section';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderSection, FooterSection, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
