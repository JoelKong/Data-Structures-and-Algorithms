class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    # Print List
    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next

    # Append (O(1))
    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return True

    # Pop (O(n))
    def pop(self):
        if self.length == 0:
            return None

        popped_node = self.head
        current_node = self.head
        while popped_node.next is not None:
            current_node = popped_node
            popped_node = popped_node.next
        self.tail = current_node
        self.tail.next = None
        self.length -= 1

        if self.length == 0:
            self.head = None
            self.tail = None
        return popped_node

    # Prepend (O(1))
    def prepend(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        self.length += 1
        return True

    # Pop first (O(1))
    def pop_first(self):
        if self.length == 0:
            return None

        temp = self.head
        self.head = self.head.next
        temp.next = None
        self.length -= 1

        if self.length == 0:
            self.tail = None
        return temp

    # Get (O(n))
    def get(self, index):
        if index < 0 or index >= self.length:
            return None

        temp = self.head
        for _ in range(index):  # if not going to use the variable in for loop use _
            temp = temp.next
        return temp

    # Set Value (O(n))
    def set_value(self, index, value):
        temp = self.get(index)
        if temp:
            temp.value = value
            return True
        return False

    # Insert Node in index (O(n))
    def insert(self, index, value):
        if index < 0 or index >= self.length:
            return False
        if index == 0:
            return self.prepend(value)
        if index == self.length:
            return self.append(value)

        new_node = Node(value)
        temp = self.get(index - 1)
        new_node.next = temp.next
        temp.next = new_node
        self.length += 1
        return True

    # Remove Node in index (O(n))
    def remove(self, index):
        if index < 0 or index >= self.length:
            return None
        if index == 0:
            return self.pop_first()
        if index == self.length:
            return self.pop()

        prev = self.get(index - 1)
        popped = prev.next
        prev.next = popped.next
        popped.next = None
        self.length -= 1
        return popped

    # Reverse a linked list (O(n))
    def reverse(self):
        current_node = self.head
        self.head = self.tail
        self.tail = current_node

        next_node = current_node.next
        prev_node = None

        for _ in range(self.length):
            next_node = current_node.next
            current_node.next = prev_node
            prev_node = current_node
            current_node = next_node


my_linked_list = LinkedList(4)
