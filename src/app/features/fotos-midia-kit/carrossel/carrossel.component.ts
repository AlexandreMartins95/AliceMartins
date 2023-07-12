import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface CarouselItem {
  imageSrc: string;
  imageAlt: string;
  name: string;
  title: string;
}

@Component({
  selector: 'carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
})
export class CarrosselComponent implements OnInit {
  @ViewChild('carousel') carouselRef!: ElementRef<HTMLUListElement>;
  faCircleArrowLeft = faCircleArrowLeft;
  faCircleArrowRight = faCircleArrowRight;
  carouselItems: CarouselItem[] = [
    {
      imageSrc: './../../../assets/images/home 1.jpeg',
      imageAlt: 'img',
      name: 'Blanche Pearson',
      title: 'Sales Manager',
    },
    {
      imageSrc: './../../../assets/images/sobre 1.jpeg',
      imageAlt: 'img',
      name: 'Joenas Brauers',
      title: 'Web Developer',
    },
    {
      imageSrc: './../../../assets/images/sobre 2.jpeg',
      imageAlt: 'img',
      name: 'Lariach French',
      title: 'Online Teacher',
    },
    {
      imageSrc: './../../../assets/images/sobre 3.jpeg',
      imageAlt: 'img',
      name: 'James Khosravi',
      title: 'Freelancer',
    },
    {
      imageSrc: './../../../assets/images/sobre 4.jpeg',
      imageAlt: 'img',
      name: 'Kristina Zasiadko',
      title: 'Bank Manager',
    },
    {
      imageSrc: './../../../assets/images/sobre 5.jpeg',
      imageAlt: 'img',
      name: 'Donald Horton',
      title: 'App Designer',
    },
    {
      imageSrc: './../../../assets/images/sobre 6.jpeg',
      imageAlt: 'img',
      name: 'Blanche Pearson',
      title: 'Sales Manager',
    },
    {
      imageSrc: './../../../assets/images/trabalhos 1.jpeg',
      imageAlt: 'img',
      name: 'Joenas Brauers',
      title: 'Web Developer',
    },
    {
      imageSrc: './../../../assets/images/trabalhos 2.jpeg',
      imageAlt: 'img',
      name: 'Lariach French',
      title: 'Online Teacher',
    },
    {
      imageSrc: './../../../assets/images/trabalhos 3.jpeg',
      imageAlt: 'img',
      name: 'James Khosravi',
      title: 'Freelancer',
    },
    {
      imageSrc: './../../../assets/images/trabalhos 4.jpeg',
      imageAlt: 'img',
      name: 'Kristina Zasiadko',
      title: 'Bank Manager',
    },
    {
      imageSrc: './../../../assets/images/contato.jpeg',
      imageAlt: 'img',
      name: 'Donald Horton',
      title: 'App Designer',
    },
  ];

  private isDragging = false;
  private isAutoPlay = true;
  private startX = 0;
  private startScrollLeft = 0;
  private timeoutId: any;

  ngOnInit() {}

  scrollCarousel(direction: number) {
    const carousel = this.carouselRef.nativeElement;
    const firstCardWidth = (carousel.querySelector('.card') as HTMLElement)
      ?.offsetWidth;
    carousel.scrollLeft += direction * firstCardWidth;
  }

  dragStart(e: MouseEvent) {
    const carousel = this.carouselRef.nativeElement;
    this.isDragging = true;
    carousel.classList.add('dragging');
    this.startX = e.pageX;
    this.startScrollLeft = carousel.scrollLeft;
  }

  dragging(e: MouseEvent) {
    const carousel = this.carouselRef.nativeElement;
    if (!this.isDragging) return;
    carousel.scrollLeft = this.startScrollLeft - (e.pageX - this.startX);
  }

  dragStop() {
    const carousel = this.carouselRef.nativeElement;
    this.isDragging = false;
    carousel.classList.remove('dragging');
  }

  isHoveringWrapper() {
    const wrapper = this.carouselRef.nativeElement.closest('.wrapper');
    return wrapper?.matches(':hover');
  }
}
