class LinkedList {
    constructor(head){
        this.head = head;
    }
    append(value){
        //Add new node
        let new_node = new Node(value);
        let current = this.head;
        //check if linked list is empty and make new node last item
        if(current === null){
            current = new_node;
            return
            
        }
        //traverse the linked list
        while(current.next !== null){
            
            current = current.next;
            
        }
        current.next = new_node;     
    }
    prepend(value){
        //create new node
        let new_node = new Node(value);
        //set new node as head
        new_node.next = this.head;
        //change head to point to new node
        head = new_node;
    }
    size(head){
        //initialize variable to keep track of size
        let size = 0
        //start at head
        let current = head;
        //traverse
        while(current !== null){
            //increment by 1
            size++;
            //move to the next node
            current = current.next;
        }
        //return the size
        return size;
    }
    getFirstNode(head){
        return head;
    }
    getTailNode(head){
        //start from head
        let current = head;
        //traverse list
        while(current.next !== null){
            //move to the next node
            current = current.next;
        }
        //once pointer is null, return that node
        return current;
    }
    at(head, index){
        //initialize variable to keep track of index
        let currentIndex = 0;
        //start from head
        let current = head;
        //check the list is empty
        if(head === null){
            return null;
        }
        //traverse the list

        while (current !==null){
            //compare current index with desired index
            if(currentIndex === index){
                //found the index
                return current;
            }
            //increment index variable
            currentIndex++
            //move to the next node
            current = current.next;
            
        }
        //return null is index is not found
        return null;
    }
    pop(head){
        //check list is empty
      if(head == nul)
      return null;
      if(head.next == null){
        return null;
      }
      //traverse list to second last node
      let secondLast = head;
      while(secondLast.next.next!==null){
        secondLast = secondLast.next;
        //make second last node tail node
        secondLast.next == null;

      }
      return head;
    }
    contains(head, value){
        if (head === null) {
            return false;
        }
        //traverse list from head
        let current = head;
        while(current !== null){
            //check node value against target value
            if(current.value === value){
            return true;
            }
            current = current.next;
        }
        return false
    }
    find(head, value){
        let count = 0;
        let current = head;
        while(current != null){
            //check if value is present
            if(current.value === value){
                //if found increment
                count++;
                return count;
            } 
            //move to the next node
            current = current.next
        }
        return false;
    }
    toString(head) {
        let current = head;
        let result = '';
        while (current !== null) {
            // Convert the value to a string and append
            result += current.value.toString(); 
            if (current.next !== null) {
                result += ' -> ';
            }
            //move to the next
            current = current.next;
        }
        return result;
    }
}
class Node {
    constructor(value){
        this.value = null;
        this.next = null;
    }
}