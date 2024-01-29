package org.anudip.bookAngular.dao;

import org.anudip.bookAngular.bean.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<Book,Long> {
	
	@Query("select count(*) from Book")
	public int getBookCount();
	

}
