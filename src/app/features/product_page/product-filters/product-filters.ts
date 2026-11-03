import { Component, inject, output, signal } from '@angular/core';
import { CategoryService } from '../../../core/services/category/category-service';
import { CategoryFieldsType, CategoryResponse, ProductFilterCriteria } from './model/category.model';


@Component({
  selector: 'app-product-filters',
  imports: [],
  templateUrl: './product-filters.html',
  styleUrl: './product-filters.css',
})

export class ProductFilters {
    private categoryService = inject(CategoryService);

    errorMessage = signal<string>("");
    isLoading = signal<boolean>(false);
    categoriesList = signal<CategoryResponse>({
      data: [],
      success: false,
      message: ""
    });


    // max and min price value 
    minPriceValue = signal<string>("");
    maxPriceValue = signal<string>("");
    
    // Signal to store array of selected Category IDs
    selectedCategoryIds = signal<string[]>([]);

    // Signal to store the selected rating value
    selectedRating = signal<string | null>(null);

    onSelectFilters = output<ProductFilterCriteria>();

    // Helper to package and emit current filters
    private emitFilters() : void {
      this.onSelectFilters.emit({
        categoryIds: this.selectedCategoryIds(),
        minPrice: this.minPriceValue(),
        maxPrice: this.maxPriceValue(),
        rating: this.selectedRating()
      });
    }


    // rating object
    ratingsList = [
      { value: '1', label: '1 Star' },
      { value: '2', label: '2 Star' },
      { value: '3', label: '3 Star' },
      { value: '4', label: '4 Star' },
      { value: '>4', label: '> 4 Star' }
    ];

    ngOnInit():void{
      this.fetchCategories();
    }


    fetchCategories(){
        this.isLoading.set(true);

        this.categoryService.GetCategories().subscribe({
          next:(response) =>{
            console.log(response);
            this.categoriesList.set(response);
            this.isLoading.set(false);

          },
          error: (error)=>{
              this.errorMessage.set("Failed to fetch categories");
              this.isLoading.set(false);
          }
        })
    }


      // Helper method to check if an ID is selected
    isSelected(id: string): boolean {
      return this.selectedCategoryIds().includes(id);
    }
    
    // toggle selection
    onCategoryChange(event: Event, id: string):void {
      const isChecked = (event.target as HTMLInputElement).checked;

      this.selectedCategoryIds.update((ids)=>{
        if(isChecked){
          return [...ids, id];
        }else{
          return ids.filter(categoryId => categoryId !== id);
        }
      });

      console.log(this.selectedCategoryIds());
      this.emitFilters(); // Trigger parent update
    }


    // get min value
    getMinInputValue(event: Event):void{
        const minValue = (event.target as HTMLInputElement).value;
        this.minPriceValue.set(minValue);
        this.emitFilters();
        // console.log(minValue);
    }

    // get max value
    getMaxInputValue(event : Event):void{
      const maxValue = (event.target as HTMLInputElement).value;
      this.maxPriceValue.set(maxValue);
      this.emitFilters(); // Trigger parent update
    }


    // Method called when a radio button is selected
    onRatingChange(value: string): void {
      this.selectedRating.set(value);
      // console.log('Selected Rating Value:', this.selectedRating());
      
      // Call your filtering or API method here
      this.emitFilters(); // Trigger parent update
      
    }


}
