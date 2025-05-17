/*
https://www.geeksforgeeks.org/how-to-create-a-chevron-using-tailwind-css/#chevron-using-position

<div class="w-[width]  h-[height] border-t-[thickness] 
                     border-r-[thickness] transform rotate-45">
</div>
*/

export function ChevronLeft() {
  return (
    <div
      className="w-10 m-1 ml-2 border-text dark:border-dark-text h-10 
                        border-l-10 border-b-10 transform 
                        rotate-45"
    ></div>
  );
}

export function ChevronRight() {
  return (
    <div
      className="w-10 m-1 mr-2 border-text dark:border-dark-text h-10 
                        border-t-10 border-r-10 
                        transform rotate-45"
    ></div>
  );
}
