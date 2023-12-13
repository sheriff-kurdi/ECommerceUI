import { CategoriesService } from './../../../services/categories/categories.service';
import { Component, OnInit, Input  } from '@angular/core';
import {CountryService} from "../../../../demo/service/country.service";
import { TemplateBindingParseResult } from '@angular/compiler';

@Component({
  selector: 'app-stock-create-edit',
  templateUrl: './stock-create-edit.component.html',
  styleUrls: ['./stock-create-edit.component.css']
})
export class StockCreateEditComponent implements OnInit {
  @Input() product: any;

  countries: any[] = [];
  categories: any[] = [];
  selectedCountry: string = '';

  filteredCountries: any[] = [];
  selectedMulti: any[] = [];

  selectedCountryAdvanced: any[] = [];
  constructor(private countryService: CountryService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
    this.getActiveCategories();

  }
  filterCountry(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  getActiveCategories(isSearch = false) {
    this.categoriesService.getAllActive().subscribe(res => {
      this.categories = res['data'];
    })
  }
}
