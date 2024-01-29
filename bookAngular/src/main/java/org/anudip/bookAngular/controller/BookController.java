package org.anudip.bookAngular.controller;

import java.util.List;

import org.anudip.bookAngular.bean.Book;
import org.anudip.bookAngular.dao.BookDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BookController {
	@Autowired
	private BookDao bookDao;
	
	@GetMapping("/book")
	public List<Book> findAllBooks(){
		return bookDao.findAllBooks();
	}
	
	@GetMapping("/book/{id}")
	public Book findBookById(@PathVariable Long id) {
		return bookDao.findBookById(id);
	}
	@DeleteMapping("/book/{id}")
	public void deleteBookById(@PathVariable Long id) {
		bookDao.deleteBookById(id);
	}
	@PostMapping("/book")
	public void save(@RequestBody Book book) {
		bookDao.save(book);
		
	}
	@PutMapping("/book")
	public void update(@RequestBody Book book) {
		bookDao.save(book);
		
	}
	@GetMapping("/id-gen")
	public Long generateBookId() {
		return bookDao.generateBookId();
	}
	

}
